<script setup lang="ts">
import { shallowRef } from 'vue';

import UiTitleCard from '@/components/shared/UiTitleCard.vue';

const projects = shallowRef([
  {
    number: 13256498,
    sales: '$1,232',
    name: 'Attack Inday',
    action: 'Review',
    value: 'High',
    rolls: '4234',
    stock: '$33,232'
  },
  {
    number: 13286564,
    sales: '$13,232',
    name: 'Lustay Money',
    action: 'Approve',
    value: 'Low',
    rolls: '434',
    stock: '$3,222'
  },
  {
    number: 84564564,
    sales: '$1,234',
    name: 'Unli Ayuda',
    action: 'Lustay',
    value: 'High',
    rolls: '24',
    stock: '$34,232'
  },
  {
    number: 86739658,
    sales: '$14,232',
    name: 'Baha pa more',
    action: 'Impeach',
    value: 'Mid',
    rolls: '532',
    stock: '$36,232'
  },
  {
    number: 98652366,
    sales: '$211,232',
    name: 'West Philippine Sea Project',
    action: 'Ayuda',
    value: 'Low',
    rolls: '432',
    stock: '$3,232'
  },
  {
    number: 98753263,
    sales: '$133,232',
    name: 'Impeachment Project',
    action: 'Party Party',
    value: 'High',
    rolls: '67',
    stock: '$32,313'
  },
  {
    number: 98753275,
    sales: '$142,232',
    name: 'Quimbo Accesories',
    action: 'Shopping',
    value: 'Low',
    rolls: '875',
    stock: '$3,555'
  },
  {
    number: 98753291,
    sales: '$12,232',
    name: 'Wheel Chair Factory',
    action: 'Occupy',
    value: 'Mid',
    rolls: '76',
    stock: '$3,777'
  },
  {
    number: 98756325,
    sales: '$13,232',
    name: 'Adiktus Benedictus',
    action: 'Arrest',
    value: 'Low',
    rolls: '66',
    stock: '$3,889'
  },
  {
    number: 98764564,
    sales: '$1,432',
    name: 'Duran Duran Concert',
    action: 'Singhot',
    value: 'Mid',
    rolls: '88',
    stock: '$9,232'
  }
]);
</script>

<template>
  <UiTitleCard title="Invoices" class-name="px-0 pb-0 rounded-md">
    <v-table class="bordered-table" hover density="comfortable">
      <thead class="bg-containerBg">
        <tr>
          <th class="text-left text-caption font-weight-bold text-uppercase">ID</th>
          <th class="text-left text-caption font-weight-bold text-uppercase">Film Type</th>
          <th class="text-right text-caption font-weight-bold text-uppercase" style="min-width: 100px">Sales</th>
          <th class="text-left text-caption font-weight-bold text-uppercase">Rolls</th>
          <th class="text-left text-caption font-weight-bold text-uppercase">Stock</th>
          <th class="text-left text-caption font-weight-bold text-uppercase">Value</th>
          <th class="text-right text-caption font-weight-bold text-uppercase">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in projects" :key="item.name">
          <td class="py-3">
            <router-link to="/dashboard/default" class="text-secondary link-hover">{{ item.number }}</router-link>
          </td>
          <td class="py-3">{{ item.name }}</td>
          <td class="py-3 text-right" style="min-width: 100px">{{ item.sales }}</td>
          <td class="py-3 text-right" style="min-width: 100px">{{ item.stock }}</td>
          <td class="py-3 text-right" style="min-width: 100px">{{ item.rolls }}</td>
          <td class="py-3">
            <v-chip variant="text" size="small" class="px-0" v-if="item.value === 'High'">
              <v-avatar size="8" color="error" variant="flat" class="mr-2"></v-avatar>
              <p class="text-h6 mb-0">High</p>
            </v-chip>
            <v-chip variant="text" size="small" class="px-0" v-else-if="item.value === 'Low'">
              <v-avatar size="8" color="success" variant="flat" class="mr-2"></v-avatar>
              <p class="text-h6 mb-0">Low</p>
            </v-chip>
            <v-chip variant="text" size="small" class="px-0" v-else>
              <v-avatar size="8" color="warning" variant="flat" class="mr-2"></v-avatar>
              <p class="text-h6 mb-0">Mid</p>
            </v-chip>
          </td>
          <td class="py-3 text-right" style="min-width: 100px">{{ item.action }}</td>
        </tr>
      </tbody>
    </v-table>
  </UiTitleCard>
</template>
