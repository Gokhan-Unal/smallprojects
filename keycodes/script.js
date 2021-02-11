const insert = document.getElementById('insert')

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
    <div class="key">
    ${e.key === ' ' ? 'Space' : e.key}
    <small>event.key</small>
    </div>

     <div class="key">
    ${e.keyCode}
    <small>event.keyCode <span>@deprecated</span></small>
    </div>

    <div class="key">
    ${e.code}
    <small>event.code</small>
    </div>
    <div class="key">
    ${e.which}
    <small>event.which <span>@deprecated</span></small>
    </div>
  `
})
