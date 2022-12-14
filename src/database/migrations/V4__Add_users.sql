INSERT INTO users (
    created_on,
    updated_on,
    organization_api_id,
    email,
    is_admin,
	username
)
VALUES 
(
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP,
    (SELECT api_id from organizations WHERE organizations.name = 'Ball State'),
    'someballstateadmin@bsu.edu',
    '1',
	'ballstateadmin'
)
ON CONFLICT (email) DO NOTHING;