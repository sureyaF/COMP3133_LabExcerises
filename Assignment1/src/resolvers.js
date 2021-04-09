export  const resolvers = {
    Query:{
        hello: ()=> "Hi "
    },
    Mutation:{
        createC
    },
    Mutation: {
      createCat: async (_, { name }) => {
        const kitty = new Cat({ name });
        await kitty.save();
        return kitty;
      }
    }
  };