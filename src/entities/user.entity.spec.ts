import { User } from "./user.entity";

describe('User class', () => {
    it('should make a user with no fields', () => {
      const user = new User();
      expect(user).toBeTruthy();
      expect(user.username).toBe('');
      expect(user.email).toBe('');
      expect(user.is_admin).toBe(false);
    });
    it('should make a user with username only', () => {
      const user = new User('user');
      expect(user).toBeTruthy();
      expect(user.username).toBe('user');
      expect(user.email).toBe('');
      expect(user.is_admin).toBe(false);
    });
    it('should make a user with userame and email', () => {
      const user = new User('user', 'email');
      expect(user).toBeTruthy();
      expect(user.username).toBe('user');
      expect(user.email).toBe('email');
      expect(user.is_admin).toBe(false);
    });
    it('should make a user with username email and is_admin', () => {
      const user = new User('user', 'email', true);
      expect(user).toBeTruthy();
      expect(user.username).toBe('user');
      expect(user.email).toBe('email');
      expect(user.is_admin).toBe(true);
    });
  });