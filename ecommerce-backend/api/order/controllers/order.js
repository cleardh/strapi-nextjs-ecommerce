'use strict';
const { sanitizeEntity } = require('strapi-utils')
/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */

module.exports = {
    /**
     * Only returns orders that belong to the logged in user
     * @param {any} ctx 
     */
    async find(ctx) {
        const { user } = ctx.state // Magic user

        let entities
        if (ctx.query._q) {
            entities = await strapi.services.order.search({ ...ctx.query, user: user.id})
        } else {
            entities = await strapi.services.order.find({ ...ctx.query, user: user.id})
        }

        return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.order }))
    },
    /**
     * Returns one order that belongs to the logged in user
     * @param {any} ctx 
     */
    async findOne(ctx) {
        const { id } = ctx.params
        const { user } = ctx.state

        const enitity = await strapi.services.order.findOne({ id, user: user.id })

        return sanitizeEntity(enitity, { model: strapi.models.order })
    }
};
