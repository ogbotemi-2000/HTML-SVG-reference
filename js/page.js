const pageData ={
  section_2:{
    fontAwesome:{
      setFileDetails:function(index, arr, file, details) {
        arr = ['name', 'lastModified', 'size'], details=this.fileDetails;
        if(files=this.files) details[0].data=index+1 + ' of '+files.length, details[1].forEach((e, i, a, _)=>{_=files[index][arr[i]], e.data=i===1?new Date(_).toDateString():(i?byteFormat(_):_)});
      }
    }
  }
}, filter = mDize(prot_A.filter), map=mDize(prot_A.map), forEach = mDize(prot_A.forEach);

w.addEventListener('DOMContentLoaded', function(e) {
   animations.addRippleAnimations()
})