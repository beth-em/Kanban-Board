-- Add a test user
INSERT INTO users (username, password)
VALUES ('testuser', 'password123');

-- Add sample tickets (tied to user ID 1)
INSERT INTO tickets (title, description, status, assignedUser_id)
VALUES 
  ('Build login page', 'Create the login form UI', 'To Do', 1),
  ('Set up JWT auth', 'Configure JWT middleware and login route', 'In Progress', 1),
  ('Deploy app', 'Push to Render with PostgreSQL', 'Done', 1);
