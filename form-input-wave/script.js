const labels = document.querySelectorAll('.form-control label')

labels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split('')
    .map(
      (letter, idx) => `<span style="transition-delay:${idx * 150}ms">${letter}</span>`
    )
    .join('')
})

// info u can delete transition delay
