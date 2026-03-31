//const { test, expect } = require('@playwright/test');
import { test, expect } from '@playwright/test';
test('@dev @test @prod Healthcheck: add 2 numbers', async () => {
    const sum = 1 + 1;
    expect(sum).toBe(2);

});
