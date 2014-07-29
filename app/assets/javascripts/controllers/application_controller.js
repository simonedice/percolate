Percolator.Controller = function() {};

Percolator.Controller.prototype = {
  init: function() {
    this._addControllers();
    this._defineViews();
    this._startListeners();
  },

  _addControllers: function() {
    this.canvas = new Percolator.CanvasController(new Percolator.CanvasPresenter()); //inside goes the model for Canvas
    this.problem = new Percolator.ProblemController();
    this.solutions = new Percolator.SolutionsController();
    this.comments = new Percolator.CommentsController();
  },

  _defineViews: function() {
    this.canvas.defineView();
    this.problem.defineView();
    this.solutions.defineView();
    this.comments.defineView();
  },

  _startListeners: function() {
    this.canvas.listeners();
    this.problem.listeners();
    this.solutions.listeners();
    this.comments.listeners();
  }
};
