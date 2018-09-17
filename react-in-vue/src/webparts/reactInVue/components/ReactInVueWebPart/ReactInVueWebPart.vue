<template>
    <div :class="styles.ReactInVueWebPart">
        <div :class="styles.container">
            <div :class="styles.row">
                <div :class="styles.column">
                    <web-part-title :title="title" :displayMode="displayMode" @updateProperty="_onTitleUpdate" />
                    <react-component :text="description" />
                    <primary-button text="Click Me!" @onClick="_onButtonClicked" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = require('./ReactInVueWebPart');
</script>

