# URL Shortener Project

This is a backend project designed for URL shortening. It leverages Node.js, Express, Sequelize, and MySQL. Users can input a long URL through a form and receive a "newUrl" in return, serving as the shortened link.

It also integrates Express Validator, follows the MVC pattern, and utilizes shortId and bcrypt libraries.

## Features

- **URL Shortening:** Users can input long URLs through a form and receive a "newUrl" as a shortened link in response.

- **Express Validator:** Used to validate and ensure that entered URLs have the correct format.

- **MVC Pattern:** The code follows the Model-View-Controller design pattern for efficient organization and maintenance.

- **shortId:** Shortened IDs for new links are generated using the shortId library.

- **bcrypt:** Utilized for encrypting and verifying passwords, providing additional security to the project.