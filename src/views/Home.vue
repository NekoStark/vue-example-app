<template>
  <div class="has-background-white-ter">
    <Navbar />
    <div class="home">
      <div class="container">
        <div class="columns">
          <div class="column is-one-third">
            <ProfileCard />
          </div>
          <div class="column">
            <AddNewPost />
            <Timeline />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
import ProfileCard from '@/components/ProfileCard.vue';
import AddNewPost from '@/components/AddNewPost.vue';
import Timeline from '@/components/Timeline.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    ProfileCard,
    AddNewPost,
    Timeline,
  },
};
</script>

<style scoped>
.home {
  padding-top: 2rem;
}
</style>
