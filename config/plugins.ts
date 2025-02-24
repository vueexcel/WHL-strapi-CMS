export default ({ env }) => ({
  upload: {
    config: {
      allowedTypes: ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif'],
    },
  },
  'users-permissions': {
    config: {
      jwtSecret: env('ADMIN_JWT_SECRET'),
    },
  },
});
