<template>
  <div class="box">
    <article class="media">
      <div class="media-left">
        <figure class="image is-64x64">
          <img class="is-rounded" v-bind:src="`https://api.adorable.io/avatars/64/${$root.user.email}`">
        </figure>
      </div>
      <div class="media-content">
        <div class="content">
          <p>
            <span class="is-size-4">
              <strong>{{$root.user.name}}</strong>
            </span>
            <br>
            {{$root.user.email}}
          </p>
        </div>
      </div>
    </article>
  </div>
</template>
