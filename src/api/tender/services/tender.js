'use strict';

/**
 * tender service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::tender.tender');
