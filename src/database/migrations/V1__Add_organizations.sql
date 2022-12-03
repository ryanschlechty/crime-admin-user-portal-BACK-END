INSERT INTO organizations (
    name,
    created_on,
    updated_on
)
VALUES
(
    'Ball State',
    CURRENT_TIMESTAMP,
    CURRENT_TIMESTAMP
)
ON CONFLICT (name) DO NOTHING;