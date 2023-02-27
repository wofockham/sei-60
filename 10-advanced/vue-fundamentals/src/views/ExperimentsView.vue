<template>
    <div>
        <h1>Experiments</h1>
        <ClickrButton />
        <button>Don't click this unrelated button</button>

        <hr>

        <SocialProfile name="Groucho" bio="No gods no masters" pic="http://www.placekitten.com/400/600" />
        <SocialProfile name="Harpo" bio="No gods no masters" pic="http://www.placekitten.com/400/601" />
        <SocialProfile name="Chico" bio="No gods no masters" pic="http://www.placekitten.com/401/601" />

        <hr>

        <FancyCalculator />

        <hr>

        <NumberFacts />

    </div>
</template>

<style>
</style>

<script>
import ClickrButton from '@/components/ClickrButton.vue'; // @ is a shortcut for `src/`
import SocialProfile from '@/components/SocialProfile.vue';
import FancyCalculator from '@/components/FancyCalculator.vue';
import NumberFacts from '@/components/NumberFacts.vue';

export default {
    // Registering your components:
    components: {
        ClickrButton: ClickrButton,
        SocialProfile: SocialProfile,
        FancyCalculator: FancyCalculator,
        NumberFacts: NumberFacts
    }
}

</script>