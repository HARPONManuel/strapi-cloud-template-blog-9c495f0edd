'use strict';

/**
 * homepage-test service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::homepage-test.homepage-test');
