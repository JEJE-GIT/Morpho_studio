<?php
/* Template Name: Liste jeux */
?>


<?php get_header(); ?>


<section class="liste_projets" id="liste_projets">
        <div class="projets_title">
            <h2>Mes Projets</h2>
        </div>

        <!-- Slider main container -->
        <div class="swiper" data-component="Carousel" data-carousel="split">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper">
                <!-- Slides -->
                <div class="swiper-slide">

                    <!-- Cards -->
                    <a href="./projet.html" class="projet_card">
                        <img src="./assets/images/alien_card.png" alt="Aliens en fusion" />

                        <div class="content_projet_card">
                            <h3>Aliens en fusion</h3>
                            <p>Développement d’un Jeux vidéo</p>

                            <div class="icons_programmes_card">
                                <svg class="icon icon--lg">
                                    <use xlink:href="#icon-unity"></use>
                                </svg>

                                <svg class="icon icon--lg">
                                    <use xlink:href="#icon-vscode"></use>
                                </svg>
                            </div>
                        </div>


                        <?php
                        $query = new WP_Query(array(
                        'post_type' => 'projet',
                        'post_status' => 'publish',
                        'posts_per_page' => -1
                        ));
                        ?>
    
                    <?php if ($query->have_posts()) : ?>
                       <?php while ($query->have_posts()) : $query->the_post(); ?>
                         
                            <a href="<?php the_permalink(); ?>" class="projet_card">
                                <?php the_post_thumbnail(); ?>

                                <div class="content_projet_card">
                                    <h3><?php the_title(); ?></h3>
                                    <p><?php the_content(); ?></p>

                                    <div class="icons_programmes_card">
                                        <svg class="icon icon--lg">
                                            <use xlink:href="#icon-unity"></use>
                                        </svg>

                                        <svg class="icon icon--lg">
                                            <use xlink:href="#icon-vscode"></use>
                                        </svg>
                                    </div>
                                </div>
                            </a> 
                       <?php endwhile; ?>
                    <?php endif; ?>
                    
                    <?php wp_reset_postdata(); ?>

                    </a>
                </div>

            </div>
            <!-- If we need pagination -->
            <div class="swiper-pagination"></div>
        </div>
    </section>

    <?php get_footer(); ?>