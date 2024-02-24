import React from 'react'

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top ">

<a href="" class="navbar-brand p-3">School </a>
<button class="navbar-toggler" data-toggle="collapse" type="button" data-target="#sab">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="sab">    
<ul class="navbar-nav list-line ml-auto">               
<li class="nav-item active list-line-item mr-5 ">
  <a href="home" class="nav-link active">Home</a>
</li>

<li class="nav-item dropdown list-line-item mr-5 " >
  <a href="admin/first.php" class="nav-link">About</a>
</li>
<li class="nav-item dropdown  list-line-item mr-5" >
<a href="teacher/first.php" class="nav-link" data-target="#login" data-toggle="modal">Teacher</a>
</li>
</ul>
</div>
</nav>
    </div>
  )
}

export default NavBar