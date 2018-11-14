<template>
  <div class="has-background-white-ter">
    <Navbar />
    <div class="home section">
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
    <footer class="footer has-background-primary">
      <div class="content has-text-centered">
        <p>
          <strong>Vue Example Project</strong> by Simone Mattolini
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
// TODO footer come componente
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
