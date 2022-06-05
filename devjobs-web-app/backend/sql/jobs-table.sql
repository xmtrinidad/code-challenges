USE [devjobs]

CREATE TABLE Jobs (
  id INT NOT NULL IDENTITY(1,1) PRIMARY KEY,
  icon VARCHAR(MAX),
  time VARCHAR(MAX),
  isFullTime BIT,
  jobTitle VARCHAR(MAX),
  company VARCHAR(MAX),
  locations VARCHAR(MAX)
);