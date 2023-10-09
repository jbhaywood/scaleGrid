export class gridUtils {
  // LOG UTILS
  ////////////////////////////////////////////////////
  static log(message) {
    console.log(`Grid Scale | ${message}`);
  }

  static logOperation(desc, num) {
    gridUtils.log(`The grid ${desc} was set to ${num}.`);
  }

  // CANVAS UTILS
  ////////////////////////////////////////////////////
  static getMousePos(evt) {
    let result = null;

    if (evt) {
      result = evt.data.getLocalPosition(canvas.app.stage)
    } else {
      const { app: { plugins: { interaction } } } = canvas;
      // Older version of Foundry use mouse, newer versions use pointer.
      let pointer = interaction.mouse || interaction.pointer;
      result = pointer.getLocalPosition(canvas.app.stage);
    }

    return result;
  }

  // GRID UTILS
  ////////////////////////////////////////////////////
  static async getGridSizeByCount(gridCount) {
    if (!gridCount) {
      return 0;
    }

    const dimensions = canvas.dimensions;
    const gridType = canvas.grid.type;
    let size = 0;

    switch (gridType) {
      // If this is a square grid, or a hex grid with rows, assume the number is the horizontal cell count.
      case 1:
        size = dimensions.sceneWidth / gridCount;
        break;
      case 2:
      case 3:
        // Find the width of the hex by dividing the number of hexes into the width of the scene.
        // The final size is the height of the hex. Get the height by multiplying the width by 1.15471.
        size = dimensions.sceneWidth / gridCount * 1.15471;
        break;
      // If this is a hex grid with columns, assume the number is the vertical cell count.
      case 4:
      case 5:
        // Find the height of the hex by dividing the number of hexes into the height of the scene.
        // The final size is the width of the hex. Get the width by multiplying the height by 1.15471.
        size = dimensions.sceneHeight / gridCount * 1.15471;
        break;
    }

    return size;
  }

  static findTheBest(p1, p2, p, gridSize) {
    let arry = null;
    const abs1 = p1 - p;
    const abs2 = p2 - p;

    if (Math.abs(abs1) < Math.abs(abs2)) {
      if (p1 < p) {
        arry = [Math.abs(abs1), -Math.abs(gridSize / 2)]
        return arry;
      }
      else {
        arry = [-Math.abs(abs1), -Math.abs(gridSize / 2)]
        return arry;
      }
    }
    else {
      if (p2 < p) {
        arry = [Math.abs(abs2), Math.abs(gridSize / 2)]
        return arry;
      }
      else {
        arry = [-Math.abs(abs2), Math.abs(gridSize / 2)]
        return arry;
      }
    }
  }

  static findTheBestSide(p1, p2, p3, cP) {
    if (cP < p1 + 5 && cP > p1 - 5) {
      return p1
    }
    else if (cP < p2 + 5 && cP > p2 - 5) {
      return p2
    }
    else {
      return p3
    }
  }

  // Updates the grid without actually saving it to the scene. This is taken and modified fron grid-config.js in Foundry.
  static refreshGrid({
    background = false,
    grid = false,
    offsetX = null,
    offsetY = null,
    offsetSize = null, // can't be smaller than 50
    alpha = 1.0,
    color = "#FF0000"} = {}) {

    const d = canvas.grid.grid.options.dimensions;

    if (offsetSize) {
      d.size += offsetSize;
    }

    if (offsetX) {
      d.sceneX += offsetX;
    }

    if (offsetY) {
      d.sceneY += offsetY;
    }

    const bg = canvas.primary.background;
    const fg = canvas.primary.foreground;

    // Update the background and foreground sizing
    if (background && bg) {
      bg.position.set(d.sceneX, d.sceneY);
      bg.width = d.sceneWidth;
      bg.height = d.sceneHeight;
      grid ||= {};
    }

    if (background && fg) {
      fg.position.set(d.sceneX, d.sceneY);
      fg.width = d.sceneWidth;
      fg.height = d.sceneHeight;
    }

    if (!color) {
      color = canvas.scene.grid.color;
    }

    // Update the grid layer
    if (grid) {
      canvas.grid.grid.draw({
        dimensions: d,
        color: color.replace("#", "0x"),
        alpha: alpha
      });

      canvas.stage.hitArea = d.rect;
    }
  }

  // SCENE UTILS
  ////////////////////////////////////////////////////
  static getAdjustedSceneSize(gridSize) {
    const adjustment = 50 / gridSize;
    const newHeight = Math.round(canvas.dimensions.sceneHeight * adjustment)
    const newWidth = Math.round(canvas.dimensions.sceneWidth * adjustment)

    return { size: 50, sceneWidth: newWidth, sceneHeight: newHeight, adjustment: adjustment };
  }
}
