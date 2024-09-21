<script setup lang="ts">
import { shallowRef } from 'vue';

import UiTitleCard from '@/components/shared/UiTitleCard.vue';

const projects = shallowRef([
  {
    number: 13256498,
    price: '$1,232',
    name: 'Attack Inday',
    action: 'Review',
    priority: 'rejected',
    date: '2017-12-21'
  },
  {
    number: 13286564,
    price: '$13,232',
    name: 'Lustay Money',
    action: 'Approve',
    priority: 'approved',
    date: '2018-11-11'
  },
  {
    number: 84564564,
    price: '$1,234',
    name: 'Unli Ayuda',
    action: 'Lustay',
    priority: 'rejected',
    date: '2012-10-09'
  },
  {
    number: 86739658,
    price: '$14,232',
    name: 'Baha pa more',
    action: 'Impeach',
    priority: 'pending',
    date: '2002-07-10'
  },
  {
    number: 98652366,
    price: '$211,232',
    name: 'West Philippine Sea Project',
    action: 'Ayuda',
    priority: 'approved',
    date: '2001-11-11'
  },
  {
    number: 98753263,
    price: '$133,232',
    name: 'Impeachment Project',
    action: 'Party Party',
    priority: 'rejected',
    date: '2002-11-12'
  },
  {
    number: 98753275,
    price: '$142,232',
    name: 'Quimbo Accesories',
    action: 'Shopping',
    priority: 'approved',
    date: '2017-12-21'
  },
  {
    number: 98753291,
    price: '$12,232',
    name: 'Wheel Chair Factory',
    action: 'Occupy',
    priority: 'pending',
    date: '1988-11-10'
  },
  {
    number: 98756325,
    price: '$13,232',
    name: 'Adiktus Benedictus',
    action: 'Arrest',
    priority: 'approved',
    date: '2024-12-21'
  },
  {
    number: 98764564,
    price: '$1,432',
    name: 'Duran Duran Concert',
    action: 'Singhot',
    priority: 'pending',
    date: '2000-12-21'
  }
]);
</script>

<template>
  <UiTitleCard title="Proposals" class-name="px-0 pb-0 rounded-md">
    <v-table class="bordered-table" hover density="comfortable">
      <thead class="bg-containerBg">
        <tr>
          <th class="text-left text-caption font-weight-bold text-uppercase">ID</th>
          <th class="text-left text-caption font-weight-bold text-uppercase">Project Name</th>
          <th class="text-right text-caption font-weight-bold text-uppercase" style="min-width: 100px">Price</th>
          <th class="text-left text-caption font-weight-bold text-uppercase">Status</th>
          <th class="text-left text-caption font-weight-bold text-uppercase">Date</th>
          <th class="text-right text-caption font-weight-bold text-uppercase">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in projects" :key="item.name">
          <td class="py-3">
            <router-link to="/dashboard/default" class="text-secondary link-hover">{{ item.number }}</router-link>
          </td>
          <td class="py-3">{{ item.name }}</td>
          <td class="py-3 text-right" style="min-width: 100px">{{ item.price }}</td>
          <td class="py-3">
            <v-chip variant="text" size="small" class="px-0" v-if="item.priority === 'rejected'">
              <v-avatar size="8" color="error" variant="flat" class="mr-2"></v-avatar>
              <p class="text-h6 mb-0">Rejected</p>
            </v-chip>
            <v-chip variant="text" size="small" class="px-0" v-else-if="item.priority === 'approved'">
              <v-avatar size="8" color="success" variant="flat" class="mr-2"></v-avatar>
              <p class="text-h6 mb-0">Approved</p>
            </v-chip>
            <v-chip variant="text" size="small" class="px-0" v-else>
              <v-avatar size="8" color="warning" variant="flat" class="mr-2"></v-avatar>
              <p class="text-h6 mb-0">Pending</p>
            </v-chip>
          </td>
          <td class="py-3 text-right" style="min-width: 100px">{{ item.date }}</td>
          <td class="py-3 text-right" style="min-width: 100px">{{ item.action }}</td>
        </tr>
      </tbody>
    </v-table>
  </UiTitleCard>
</template>
