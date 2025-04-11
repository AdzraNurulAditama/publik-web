
document.getElementById('submit').addEventListener('click', function() {
  const username = document.querySelector('.username').value;

  if (username) {
      localStorage.setItem('username', username);
      window.location.href = '../html/index.html';
  } else {
      alert('Harap masukkan username!');
  }
});
