
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'

interface BreadcrumbEntry {
  label: string
  to?: string
}

const props = defineProps<{
  items?: BreadcrumbEntry[]
}>()

const route = useRoute()

const breadcrumbs = computed<BreadcrumbEntry[]>(() => {
  if (props.items?.length) {
    return props.items
  }

  return route.matched
    .filter((record) => record.meta.breadcrumb)
    .map((record) => ({
      label: String(record.meta.breadcrumb),
      to: record.path,
    }))
})
</script>

<template>
  <Breadcrumb>
    <BreadcrumbList>
      <template
        v-for="(item, index) in breadcrumbs"
        :key="item.to ?? index"
      >
        <BreadcrumbSeparator v-if="index !== 0" />

        <BreadcrumbItem>
          <BreadcrumbPage
            v-if="index === breadcrumbs.length - 1"
            class="!text-white font-normal"
          >
            {{ item.label }}
          </BreadcrumbPage>

          <BreadcrumbLink
            v-else-if="item.to"
            as-child
          >
            <RouterLink
              :to="item.to"
              :class="index === 0 ? 'home-link' : 'products-link'"
            >
              {{ item.label }}
            </RouterLink>
          </BreadcrumbLink>

          <span v-else>
            {{ item.label }}
          </span>
        </BreadcrumbItem>
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>

<style scoped>
.home-link {
  transition: color 0.3s ease;
  text-decoration: none;
}

.home-link:hover {
  color: red !important;
}

.products-link {
  text-decoration: none;
}

.products-link:hover {
  color: inherit !important;
}
</style>
