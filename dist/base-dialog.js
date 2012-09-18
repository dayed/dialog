define("#dialog/0.9.1/base-dialog",["$","#overlay/0.9.10/overlay","#position/1.0.0/position","#iframe-shim/1.0.0/iframe-shim","position/1.0.0/position","#widget/1.0.0/widget","#base/1.0.0/base","#class/1.0.0/class","#events/1.0.0/events","#overlay/0.9.10/mask"],function(e,t,n){function a(e){e.attr("tabindex")==null&&e.attr("tabindex","-1")}var r=e("$"),i=e("#overlay/0.9.10/overlay"),s=e("#overlay/0.9.10/mask"),o=e("#events/1.0.0/events"),u=i.extend({attrs:{trigger:null,triggerType:"click",zIndex:999,title:"",content:"",hasMask:!1,onConfirm:function(){},onClose:function(){}},parseElement:function(){u.superclass.parseElement.call(this),this.set("trigger",r(this.get("trigger"))),this.set("titleElement",this.$("[data-role=title] h2")),this.set("contentElement",this.$("[data-role=content]"))},events:{"click [data-role=confirm]":"_confirmHandler","click [data-role=cancel]":"_closeHandler","click [data-role=close]":"_closeHandler"},_confirmHandler:function(){this.trigger("confirm")},_closeHandler:function(){this.trigger("close"),this.hide(),this.get("trigger").focus()},delegateEvents:function(){u.superclass.delegateEvents.call(this);var e=this;this.get("trigger").on(this.get("triggerType"),function(t){t.preventDefault(),e.activeTrigger=this,e.show()}),o.mixTo(this.element[0]),this.element[0].on("confirm",this._confirmHandler,this),this.element[0].on("close cancel",this._closeHandler,this)},show:function(){return u.superclass.show.call(this),this.element.focus(),this},hide:function(){return u.superclass.hide.call(this)},setup:function(){u.superclass.setup.call(this),this._setupMask(),this._setupKeyEvents(),a(this.element),a(this.get("trigger"))},_setupMask:function(){this.before("show",function(){this.get("hasMask")&&s.show()}),this.before("hide",function(){this.get("hasMask")&&s.hide()})},_setupKeyEvents:function(){var e=this;r(this.element).on("keyup",function(t){t.keyCode===27?e._closeHandler():t.keyCode===13&&e._confirmHandler()})},_onRenderTitle:function(e){r.isFunction(e)?this.get("titleElement").html(e.call(this)):this.get("titleElement").html(e)},_onRenderContent:function(e){r.isFunction(e)?this.get("contentElement").html(e.call(this)):this.get("contentElement").html(e)}});n.exports=u});