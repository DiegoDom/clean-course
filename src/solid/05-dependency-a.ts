import { HttpClient } from './02-open-close-c'
import { PostService } from './05-dependency-b'
import {
  JsonDataBaseService,
  LocalDataBaseService,
  WebApiPostsService,
} from './05-dependency-c'

// Main
;(async () => {
  const httpClient = new HttpClient()
  const provider = new WebApiPostsService(httpClient)

  // const provider = new JsonDataBaseService()
  //const provider = new LocalDataBaseService()
  const postService = new PostService(provider)

  const posts = await postService.getPosts()

  console.log({ posts })
})()
