"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ItemService = /** @class */ (function () {
    function ItemService() {
        this.items = new Array({ id: 1, name: "Ter Stegen", role: "Goalkeeper" }, { id: 3, name: "Piqué", role: "Defender" }, { id: 4, name: "I. Rakitic", role: "Midfielder" }, { id: 5, name: "Sergio", role: "Midfielder" }, { id: 6, name: "Denis Suárez", role: "Midfielder" }, { id: 7, name: "Arda", role: "Midfielder" }, { id: 8, name: "A. Iniesta", role: "Midfielder" }, { id: 9, name: "Suárez", role: "Forward" }, { id: 10, name: "Messi", role: "Forward" }, { id: 11, name: "Neymar", role: "Forward" }, { id: 12, name: "Rafinha", role: "Midfielder" }, { id: 13, name: "Cillessen", role: "Goalkeeper" }, { id: 14, name: "Mascherano", role: "Defender" }, { id: 17, name: "Paco Alcácer", role: "Forward" }, { id: 18, name: "Jordi Alba", role: "Defender" }, { id: 19, name: "Digne", role: "Defender" }, { id: 20, name: "Sergi Roberto", role: "Midfielder" }, { id: 21, name: "André Gomes", role: "Midfielder" }, { id: 22, name: "Aleix Vidal", role: "Midfielder" }, { id: 23, name: "Umtiti", role: "Defender" }, { id: 24, name: "Mathieu", role: "Defender" }, { id: 25, name: "Masip", role: "Goalkeeper" });
    }
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    ItemService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], ItemService);
    return ItemService;
}());
exports.ItemService = ItemService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBTzNDO0lBSEE7UUFJWSxVQUFLLEdBQUcsSUFBSSxLQUFLLENBQ3JCLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDakQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUMxQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQ2pELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDN0MsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUNuRCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQzNDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDakQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUMxQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQzFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFDM0MsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUMvQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQ2pELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFDaEQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUNqRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQ2hELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFDM0MsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUNyRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQ25ELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDbkQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUM1QyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQzdDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FDaEQsQ0FBQztJQVNOLENBQUM7SUFQRyw4QkFBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxJQUFJLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBZCxDQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBaENRLFdBQVc7UUFIdkIsaUJBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7T0FDVyxXQUFXLENBaUN2QjtJQUFELGtCQUFDO0NBQUEsQUFqQ0QsSUFpQ0M7QUFqQ1ksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiBcInJvb3RcIlxyXG59KVxyXG5leHBvcnQgY2xhc3MgSXRlbVNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBpdGVtcyA9IG5ldyBBcnJheTxJdGVtPihcclxuICAgICAgICB7IGlkOiAxLCBuYW1lOiBcIlRlciBTdGVnZW5cIiwgcm9sZTogXCJHb2Fsa2VlcGVyXCIgfSxcclxuICAgICAgICB7IGlkOiAzLCBuYW1lOiBcIlBpcXXDqVwiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcclxuICAgICAgICB7IGlkOiA0LCBuYW1lOiBcIkkuIFJha2l0aWNcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcclxuICAgICAgICB7IGlkOiA1LCBuYW1lOiBcIlNlcmdpb1wiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDYsIG5hbWU6IFwiRGVuaXMgU3XDoXJlelwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDcsIG5hbWU6IFwiQXJkYVwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDgsIG5hbWU6IFwiQS4gSW5pZXN0YVwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDksIG5hbWU6IFwiU3XDoXJlelwiLCByb2xlOiBcIkZvcndhcmRcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDEwLCBuYW1lOiBcIk1lc3NpXCIsIHJvbGU6IFwiRm9yd2FyZFwiIH0sXHJcbiAgICAgICAgeyBpZDogMTEsIG5hbWU6IFwiTmV5bWFyXCIsIHJvbGU6IFwiRm9yd2FyZFwiIH0sXHJcbiAgICAgICAgeyBpZDogMTIsIG5hbWU6IFwiUmFmaW5oYVwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDEzLCBuYW1lOiBcIkNpbGxlc3NlblwiLCByb2xlOiBcIkdvYWxrZWVwZXJcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDE0LCBuYW1lOiBcIk1hc2NoZXJhbm9cIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXHJcbiAgICAgICAgeyBpZDogMTcsIG5hbWU6IFwiUGFjbyBBbGPDoWNlclwiLCByb2xlOiBcIkZvcndhcmRcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDE4LCBuYW1lOiBcIkpvcmRpIEFsYmFcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXHJcbiAgICAgICAgeyBpZDogMTksIG5hbWU6IFwiRGlnbmVcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXHJcbiAgICAgICAgeyBpZDogMjAsIG5hbWU6IFwiU2VyZ2kgUm9iZXJ0b1wiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDIxLCBuYW1lOiBcIkFuZHLDqSBHb21lc1wiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDIyLCBuYW1lOiBcIkFsZWl4IFZpZGFsXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXHJcbiAgICAgICAgeyBpZDogMjMsIG5hbWU6IFwiVW10aXRpXCIsIHJvbGU6IFwiRGVmZW5kZXJcIiB9LFxyXG4gICAgICAgIHsgaWQ6IDI0LCBuYW1lOiBcIk1hdGhpZXVcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXHJcbiAgICAgICAgeyBpZDogMjUsIG5hbWU6IFwiTWFzaXBcIiwgcm9sZTogXCJHb2Fsa2VlcGVyXCIgfSxcclxuICAgICk7XHJcblxyXG4gICAgZ2V0SXRlbXMoKTogSXRlbVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICAgIH1cclxuXHJcbiAgICBnZXRJdGVtKGlkOiBudW1iZXIpOiBJdGVtIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBpZClbMF07XHJcbiAgICB9XHJcbn1cclxuIl19