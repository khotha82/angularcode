"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Like = /** @class */ (function () {
    function Like(isLiked, _count) {
        this.isLiked = isLiked;
        this._count = _count;
    }
    Object.defineProperty(Like.prototype, "count", {
        get: function () {
            return this._count;
        },
        enumerable: true,
        configurable: true
    });
    Like.prototype.onClick = function () {
        this.isLiked = !this.isLiked;
        this.isLiked ? this._count++ : this._count--;
        console.log('likes: ' + this.isLiked);
        console.log('count: ' + this._count);
    };
    return Like;
}());
exports.Like = Like;
