import { field, group } from "@nuxt/content/preview"

export default defineNuxtSchema({
  appConfig:{
    parent:group({
      title:"Test",
      description:"This is a pure test",
      fields:{
        primo:field({
          title: "Questo è il primo",
          type: "string",
          description:"Questa è la descrizione del primo",
          default: "Ok"
        })
      }
    })
  }
})