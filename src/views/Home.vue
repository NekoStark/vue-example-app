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
            <Timeline />
          </div>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
// TODO footer come componente
import Navbar from '@/components/Navbar.vue';
import AppFooter from '@/components/Footer.vue';
import ProfileCard from '@/components/ProfileCard.vue';
import Timeline from '@/components/Timeline.vue';

export default {
  name: 'home',
  components: {
    Navbar,
    AppFooter,
    ProfileCard,
    Timeline,
  },
};
</script>
