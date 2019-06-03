<template>
  <div class="card mb-3">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img class="card-img" :src="room.photoUrls.homecardHidpi" alt="room image" />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <p class="card-text mt-2">{{ room.title }}</p>
          <p class="badge badge-pill badge-dark price">{{ room.pricePerMonth }} {{ room.currencySymbol }}</p>
          <p class="text-right">
            <button type="button" class="btn btn-primary btn-sm mr-2">More details</button>
            <button type="button" class="btn btn-secondary btn-sm">Book now!</button>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'room',
  props: ['room']
}
</script>