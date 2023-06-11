DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS steps;
DROP TABLE IF EXISTS modules;
CREATE TABLE users(
  id serial primary key,
  completed_modules int [],
  email text
);
CREATE TABLE modules (
  id serial primary key,
  device_type text,
  title text,
  description text
);
CREATE TABLE steps(
  id serial primary key,
  module_id int references modules (id),
  step_order int,
  modal_text text,
  active_element text
);
INSERT INTO
  modules (device_type, title, description)
VALUES
  (
    'mac',
    'Download Folder',
    'In this module, you will learn how to navigate to your downloads folder'
  ),
  (
    'mac',
    'Apple Menu',
    'In this module, you will learn how to navigate through the Apple Menu'
  );
INSERT INTO
  steps (
    module_id,
    step_order,
    modal_text,
    active_element
  )
VALUES
  (
    1,
    1,
    'click on download folder',
    '[data-folder-download]'
  ),
  (1, 2, 'find the lion photo', '[data-lion-png]'),
  (1, 3, 'close the window', '[data-close-window]'),
  (2, 1, 'click on the apple menu', '[data-apple-menu]'),
  (2, 2, 'click on about this mac', '[data-about-this-mac]'),
  (2, 2, 'click on about this mac', '[data-about-this-mac]'),
  (2, 3, 'click on storage', '[data-about-storage]');
  