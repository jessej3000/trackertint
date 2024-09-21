<script setup lang="ts">
import { shallowRef } from 'vue';

import UiTitleCard from '@/components/shared/UiTitleCard.vue';

const projects = shallowRef([
  {
    number: 13256498,
    adress: 'Matina Davao City',
    name: 'Jesse Junsay',
    phone: '6388-234-2343',
    priority: 'rejected'
  },
  {
    number: 13286564,
    adress: 'Mintal  Davao City',
    name: 'James Mangubat',
    phone: '5432-342-3123',
    priority: 'approved'
  },
  {
    number: 84564564,
    adress: 'Jacks Ridge Davao City',
    name: 'Jay Tumala',
    phone: '2344-234-2532',
    priority: 'rejected'
  },
  {
    number: 86739658,
    adress: 'Matina Town Center  Davao City',
    name: 'Inday Sara',
    phone: '5432-234-2342',
    priority: 'pending'
  },
  {
    number: 98652366,
    adress: 'Crocodile Park',
    name: 'Martin Romuwaldas',
    phone: '7534-123-3422',
    priority: 'approved'
  },
  {
    number: 98753263,
    adress: 'Crocodile Park Davao City',
    name: 'Zaldy Korikong',
    phone: '9874-422-3423',
    priority: 'rejected'
  },
  {
    number: 98753275,
    adress: 'Crocodile Park Maa Davao City',
    name: 'Stella Kembot',
    phone: '9894-234-4244',
    priority: 'approved'
  },
  {
    number: 98753291,
    adress: 'Crocodile Park Davao City',
    name: 'Madam Chair',
    phone: '9999-234-1232',
    priority: 'pending'
  },
  {
    number: 98756325,
    adress: 'Home Address Davao City',
    name: 'Mobile Legend',
    phone: '1111-234-2222',
    priority: 'approved'
  },
  {
    number: 98764564,
    adress: 'UM Bolton Davao City',
    name: 'Dota Two',
    phone: '3333-444-2221',
    priority: 'pending'
  }
]);
</script>

<template>
  <UiTitleCard title="Contacts" class-name="px-0 pb-0 rounded-md">
    <v-table class="bordered-table" hover density="comfortable">
      <thead class="bg-containerBg">
        <tr>
          <th class="text-left text-caption font-weight-bold text-uppercase">ID</th>
          <th class="text-left text-caption font-weight-bold text-uppercase">Name</th>
          <th class="text-right text-caption font-weight-bold text-uppercase" style="min-width: 100px">Address</th>
          <th class="text-right text-caption font-weight-bold text-uppercase">Phone</th>
          <th class="text-left text-caption font-weight-bold text-uppercase">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in projects" :key="item.name">
          <td class="py-3">
            <router-link to="/dashboard/default" class="text-secondary link-hover">{{ item.number }}</router-link>
          </td>
          <td class="py-3">{{ item.name }}</td>
          <td class="py-3 text-right" style="min-width: 100px">{{ item.adress }}</td>
          <td class="py-3 text-right" style="min-width: 100px">{{ item.phone }}</td>
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
        </tr>
      </tbody>
    </v-table>
  </UiTitleCard>
</template>
