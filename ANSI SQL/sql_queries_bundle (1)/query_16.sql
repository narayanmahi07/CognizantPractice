-- 16. Unregistered Active Users
SELECT *
FROM Users u
WHERE u.registration_date >= CURDATE() - INTERVAL 30 DAY
AND u.user_id NOT IN (
  SELECT DISTINCT user_id FROM Registrations
);