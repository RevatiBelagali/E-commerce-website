<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Form Example</title>
  <!-- Add Bootstrap CSS if needed -->
  <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
  <div class="container mt-5">
    <form id="myForm" action="/submit" method="POST">
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" name="email" required>
        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" name="password" required>
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" name="check" required>
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>

  <!-- Add Bootstrap JS and jQuery if needed -->
  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>

  <!-- JavaScript to handle form submission -->
  <script>
    document.getElementById("myForm").addEventListener("submit", function(event){
      event.preventDefault(); // Prevent default form submission

      // Simulate form submission (e.g., using AJAX or fetch)
      const formData = new FormData(this);
      fetch('/submit', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        alert("Form submitted successfully!");
        // Handle success (e.g., display a message or redirect)
      })
      .catch(error => {
        alert("Error submitting form!");
        // Handle error
      });
    });
  </script>
</body>
</html>
