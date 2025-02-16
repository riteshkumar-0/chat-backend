module.exports = {
    async create(ctx) {
      const { message, user } = ctx.request.body;
      const entry = await strapi.entityService.create('api::chat.chat', {
        data: { message, user },
      });
      return entry;
    },
  };