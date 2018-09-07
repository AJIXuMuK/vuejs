<template>
    <div :class="styles.ImageViewerWebPart">
        <div :class="styles.container">
            <div :class="styles.row">
                <div :class="styles.column">
                    <span :class="styles.title">Image Url Web Part</span>
                    <p :class="styles.subTitle">Image Url is:</p>
                    <p :class="styles.description">{{imageUrl}}</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    module.exports = require('./ImageViewerWebPart');
</script>

