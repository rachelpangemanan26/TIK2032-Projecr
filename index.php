<!DOCTYPE html>
<html lang="en">
<head>
  <?php require_once 'function.php'; ?>
  <title>Personal Homepage</title>
  <link rel="stylesheet" type="text/css" href="index.css">
</head>
<body>
  <h1>Rachel's Personal Page</h1>
  <nav>
    <a href="index.html">Home</a>
    <a href="gallery.html">Gallery</a>
    <a href="blog.html">Blog</a>
    <a href="contact.html">Contact</a>
  </nav>
  <section>
    <div class="about-me">
      <div class="text">
        <h2><?php
                $row = mysqli_fetch_assoc($result); echo $row['about_me']; ?>!</h2>
        <p>Hello! my name is <?php echo $row['name']; ?>, and this is my first ever blog, welcome!</p>
      </div>
      <div class="profile-picture">
        <img src="https://i.pinimg.com/736x/ee/3e/53/ee3e53b46a574f81c68313309fb769cb.jpg">
      </div>
    </div>
  </section>
</body>
</html>