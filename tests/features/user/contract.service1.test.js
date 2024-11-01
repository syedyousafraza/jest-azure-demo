const config = require('../../../src/features/user/contract.service');

describe('Configuration Object', () => {
    // Test for port property
    test('should have a port property with value 3000', () => {
        // Arrange
        const expectedPort = 3000;

        // Act
        const actualPort = config.port;

        // Assert
        expect(actualPort).toBe(expectedPort);
    });

    // Test for host property
    test('should have a host property with value "localhost"', () => {
        // Arrange
        const expectedHost = 'localhost';

        // Act
        const actualHost = config.host;

        // Assert
        expect(actualHost).toBe(expectedHost);
    });

    describe('Database Configuration', () => {
        // Test for db property
        test('should have a db property', () => {
            // Arrange
            const expectedDb = config.db;

            // Act & Assert
            expect(expectedDb).toBeDefined();
        });

        // Test for db host property
        test('db should have a host property with value "localhost"', () => {
            // Arrange
            const expectedDbHost = 'localhost';

            // Act
            const actualDbHost = config.db.host;

            // Assert
            expect(actualDbHost).toBe(expectedDbHost);
        });

        // Test for db user property
        test('db should have a user property with value "root"', () => {
            // Arrange
            const expectedDbUser = 'root';

            // Act
            const actualDbUser = config.db.user;

            // Assert
            expect(actualDbUser).toBe(expectedDbUser);
        });

        // Test for db password property
        test('db should have a password property with value "123"', () => {
            // Arrange
            const expectedDbPassword = '123';

            // Act
            const actualDbPassword = config.db.password;

            // Assert
            expect(actualDbPassword).toBe(expectedDbPassword);
        });

        // Test for db database property
        test('db should have a database property with value "node_db"', () => {
            // Arrange
            const expectedDbName = 'node_db';

            // Act
            const actualDbName = config.db.database;

            // Assert
            expect(actualDbName).toBe(expectedDbName);
        });
    });
});
