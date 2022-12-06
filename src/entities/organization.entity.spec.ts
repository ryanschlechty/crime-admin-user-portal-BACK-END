import { Organization } from "./organization.entity";

describe('Organization class', () => {
    it('should make an organization with no fields', () => {
      const organization = new Organization();
      expect(organization).toBeTruthy();
      expect(organization.name).toBe('');
    });
    it('should make an organization with name only', () => {
      const organization = new Organization('organization');
      expect(organization).toBeTruthy();
      expect(organization.name).toBe('organization');
    });
  });