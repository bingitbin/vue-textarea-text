export default{
    install(Vue,options){
        if (typeof window !== 'undefined' && window.Vue) {
            Vue = window.Vue
        }
        Vue.directive('textarea', function (el, binding) {
            if(!binding.value || !typeof binding.value=='string')
            {
              el.innerHTML='';
              return;
            }
            el.innerHTML=binding.value.replace(/>/g,'&gt;').replace(/</g,'&lt;').replace(/\n|\r\n/g,'<br/>').replace(/\s/g,'&nbsp;');
          })
    }
}