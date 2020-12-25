<template>
  <Layout>
    <!-- Page Header -->
    <header class="masthead" :style="{backgroundImage: `url(http://localhost:1337${general.cover.url})`}">
      <div class="overlay"></div>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <div class="site-heading">
              <h1>{{general.title}}</h1>
              <span class="subheading">{{general.subtitle}}</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-md-10 mx-auto">
          <div class="post-preview" v-for="edge in $page.posts.edges" :key="edge.node.id">
            <g-link :to="'/post/' + edge.node.id">
              <h3>
                {{edge.node.title}}
              </h3>
            </g-link>
            <p class="post-meta">Posted by
              <a href="#">Start Bootstrap</a>
              on {{edge.node.created_at}}</p>
            <p>
              <span v-for="tag in edge.node.tags">
                <g-link :to="'/tag/' + tag.id" >{{tag.title}}</g-link>
                &nbsp;&nbsp;
              </span>
            </p>
            <hr>
          </div>

          <!-- Pager -->
          <Pager :info="$page.posts.pageInfo"></Pager>
        </div>
      </div>
    </div>

    <hr>

  </Layout>
</template>
<page-query>
    query($page: Int){
        posts: allStrapiPost(perPage: 2, page: $page) @paginate{
            pageInfo{
              totalPages
              currentPage
            }
            edges{
                node{
                    id
                    title
                    created_at
                    tags{
                        id
                        title
                    }
                }
            }
        }
            general: allStrapiGeneral{
                edges{
                    node{
                        title
                        subtitle
                        cover{
                            url
                        }
                    }
                }
            }
    }
</page-query>
<script>
  import { Pager } from 'gridsome';
export default {
  metaInfo: {
    title: 'Hello, world!',
  },
    computed: {
      general(){
          return this.$page.general.edges[0].node;
      }
    },
    components: {
        Pager
    }
}
</script>
