<template>
    <Layout>
        <!-- Page Header -->
        <header class="masthead" style="background-image: url('/img/home-bg.jpg')">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-8 col-md-10 mx-auto">
                        <div class="site-heading">
                            <h1>#{{$page.tag.title}}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Content -->
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-10 mx-auto">
                    <div class="post-preview" v-for="post in $page.tag.posts" :key="post.id">
                        <g-link :to="'/post/' + post.id">
                            <h3>
                                {{post.title}}
                            </h3>
                        </g-link>
                        <p class="post-meta">Posted by
                            <a href="#">Start Bootstrap</a>
                            on {{post.created_at}}</p>
                        <hr>
                    </div>
                </div>
            </div>
        </div>

        <hr>

    </Layout>
</template>
<page-query>
    query($id: ID!){
        tag: strapiTag(id: $id){
            id
            title
            posts{
                id
                title
                created_at
            }
        }
    }
</page-query>
<script>

    export default {
        name: "tag",
    }
</script>

<style scoped>

</style>
