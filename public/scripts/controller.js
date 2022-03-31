class Controller{
  constructor(controller){
    if(controller){
      console.log(controller);
      this.axes = controller.axes || null;
      this.buttons = controller.buttons || null;
      this.id = controller.id || null;
      this.connected = controller.connected || null;
      this.vibrationActuator = controller.vibrationActuator || null;
      this.index = controller.index || null;
    }else{
      this.axes = null;
      this.buttons = null;
      this.id = null;
      this.connected = null;
      this.vibrationActuator = null;
      this.index = null;
    }
    
  }
  update(controller){
    try{
      this.axes = controller.axes;
      this.buttons = controller.buttons;
      this.id = controller.id;
      this.connected = controller.connected;
      this.vibrationActuator = controller.vibrationActuator;
      this.index = controller.index;
    }catch(e){
      
    }
  }
  getButtons(){
    let bts = {};
    if (this.buttons){
      for (let btn=0;btn<this.buttons.length;btn++){
        let val=this.buttons[btn];
        bts[btn] = val.value;
      }
    }
    return bts;
  }
  getAxes(){
    let axs = {};
    if (this.axes){
      let axes=this.axes

      axs.xl = this.axes[0];
      axs.yl = this.axes[1];
      axs.xr = this.axes[2];
      axs.yr = this.axes[3];

      for (let axis=0;axis<axes.length;axis++){
        let val=this.axes[axis];
        axs[axis] = val;
      }
    }
    return axs;
  }
  vibrate(params){
    this.vibrationActuator.playEffect(this.vibrationActuator.type,params);
  }
}