myApp.application =  {
	
	template: '<div class="header"><input type="button" id="navKillButton" value="End Navigator Module"/><input type="button" id="panelKillButton" value="End Display Panel Module"/></div>\
		<div class="navigator" id="navigator"></div>\
		<div class="blogDisplayPanel" id="blogDisplayContainer"></div>',
	start : function() {
	
		this.moduleMap = {
			blogDisplayContainer : {
				id : "blogDisplayContainer",
				module : myApp.blogDisplayPanel
			},
			navigator : {
				id : "navigator",
				module : myApp.navigator
			}
		};

		this.startAllModules();
		this.attachEventHandlers();
	},
	end: function(){

	},
	attachEventHandlers : function() {
		var self = this;
		$(this.$).find("#navKillButton").toggle(function() {
			self.endModule("navigator");
			this.value = "Start Navigator Module";
		}, function() {
			self.startModule("navigator");
			this.value = "End Navigator Module";
		});
		
		$(this.$).find("#panelKillButton").toggle(function() {
			self.endModule("blogDisplayContainer");
			this.value = "Start Display Panel Module";
		}, function() {
			self.startModule("blogDisplayContainer");
			this.value = "End Display Panel Module";
		});
	},
	startModule: function(id){
		this.sb.startModule(this.moduleMap[id]);
	},
	endModule: function(id){
		this.sb.endModule(this.moduleMap[id].id);
	},
	startAllModules: function(){
		var self = this;
		$.each(this.moduleMap,function(i,v){
			self.sb.startModule(v);
		});
	}
};
