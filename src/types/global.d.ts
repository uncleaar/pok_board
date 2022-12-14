type User = {
  name: string;
  email: string;
  city: string;
};

type RequestParams<Params> = Params;

interface RequestMutationSettings<Func = {}> {
  config?: import('axios').AxiosRequestConfig;
  options?: import('@tanstack/@tanstack/react-query').UseMutationOptions<
    Awaited<ReturnType<Func>>,
    any,
    any,
    any
  >;
}

interface RequestQuerySettings<Func = {}> {
  config?: import('axios').AxiosRequestConfig;
  options?: import('@tanstack/@tanstack/react-query').UseQueryOptions<
    Awaited<ReturnType<Func>>,
    any,
    Awaited<ReturnType<Func>>,
    any
  >;
}

interface RequestInfinityQuerySettings<Func = {}> {
  config?: import('axios').AxiosRequestConfig;
  options?: import('@tanstack/@tanstack/react-query').UseInfiniteQueryOptions<
    Awaited<ReturnType<Func>>,
    any,
    Awaited<ReturnType<Func>>,
    Awaited<ReturnType<Func>>,
    any
  >;
}

interface RequestQueryParams<Params = {}> {
  params: Params;
}

interface RequestQueryWithoutParams<Func = {}> {
  config?: import('axios').AxiosRequestConfig;
  options?: import('@tanstack/@tanstack/react-query').UseQueryOptions<
    Awaited<ReturnType<Func>>,
    any,
    Awaited<ReturnType<Func>>,
    any,
    any
  >;
}

interface RequestInfiniteQueryWithoutParams<Func = {}> {
  config?: import('axios').AxiosRequestConfig;
  options?: import('@tanstack/@tanstack/react-query').UseInfiniteQueryOptions<
    Awaited<ReturnType<Func>>,
    any,
    Awaited<ReturnType<Func>>,
    any,
    any
  >;
}

interface NamedAPIResource {
  /** The name of the referenced resource */
  name: string;
  /** The URL of the referenced resource */
  url: string;
}

interface RequestQueryParams<T = {}> {
  params?: T;
  config?: any;
}

/**
 * Calling any API endpoint without a resource ID or name will return a paginated list of available resources for that API.
 * By default, a list "page" will contain up to 20 resources. If you would like to change this just add a 'limit' query parameter
 * to the GET request, e.g. ?=60. You can use 'offset' to move to the next page, e.g. ?limit=60&offset=60
 */
interface NamedAPIResourceList {
  /** The total number of resources available from this API */
  count: number;
  /** The URL for the next page in the list */
  next: string | null;
  /** The URL for the previous page in the list */
  previous: string | null;
  /** A list of named API resources */
  results: NamedAPIResource[];
}

/** An URL for another resource in the API */
interface APIResource {
  /** The URL of the referenced resource */
  url: string;
}

interface Pokemon {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The base experience gained for defeating this Pok??mon */
  base_experience: number;
  /** The height of this Pok??mon in decimetres */
  height: number;
  /** Set for exactly one Pok??mon used as the default for each species */
  is_default: boolean;
  /** Order for sorting. Almost national order, except families are grouped together */
  order: number;
  /** The weight of this Pok??mon in hectograms */
  weight: number;
  /** A list of abilities this Pok??mon could potentially have */
  abilities: PokemonAbility[];
  /** A list of forms this Pok??mon can take on */
  forms: NamedAPIResource[];
  /** A list of game indices relevent to Pok??mon item by generation */
  game_indices: VersionGameIndex[];
  /** A list of items this Pok??mon may be holding when encountered */
  held_items: PokemonHeldItem[];
  /** A link to a list of location areas, as well as encounter details pertaining to specific versions */
  location_area_encounters: string;
  /** A list of moves along with learn methods and level details pertaining to specific version groups */
  moves: PokemonMove[];
  /** A set of sprites used to depict this Pok??mon in the game.
   * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
   */
  sprites: PokemonSprites;
  /** The species this Pok??mon belongs to */
  species: NamedAPIResource;
  /** A list of base stat values for this Pok??mon */
  stats: PokemonStat[];
  /** A list of details showing types this Pok??mon has */
  types: PokemonType[];
  /** Data describing a Pokemon's types in a previous generation. */
  past_types: PokemonPastType[];
}

/**
 * Abilities the given pok??mon could potentially have
 */
interface PokemonAbility {
  /** Whether or not this is a hidden ability */
  is_hidden: boolean;
  /** The slot this ability occupies in this Pok??mon species */
  slot: number;
  /** The ability the Pok??mon may have */
  ability: NamedAPIResource;
}

/**
 * Details showing types the given Pok??mon has
 */
interface PokemonType {
  /** The order the Pok??mon's types are listed in */
  slot: number;
  /** The type the referenced Pok??mon has */
  type: NamedAPIResource;
}

/**
 * Data describing a Pokemon's types in a previous generation.
 */
interface PokemonPastType {
  /** The generation of this Pok??mon Type. */
  generation: NamedAPIResource;
  /** Types this of this Pok??mon in a previos generation. */
  types: PokemonType[];
}

/**
 * Items the given Pok??mon may be holding when encountered
 */
interface PokemonHeldItem {
  /** The item the referenced Pok??mon holds */
  item: NamedAPIResource;
  /** The details of the different versions in which the item is held */
  version_details: PokemonHeldItemVersion[];
}

/**
 * The details of the different versions in which the item is held
 */
interface PokemonHeldItemVersion {
  /** The version in which the item is held */
  version: NamedAPIResource;
  /** How often the item is held */
  rarity: number;
}

/**
 * A Move along with learn methods and level details pertaining to specific version groups
 */
interface PokemonMove {
  /** The move the Pok??mon can learn */
  move: NamedAPIResource;
  /** The details of the version in which the Pok??mon can learn the move */
  version_group_details: PokemonMoveVersion[];
}

/**
 * The details of the version in which the Pok??mon can learn the move
 */
interface PokemonMoveVersion {
  /** The method by which the move is learned */
  move_learn_method: NamedAPIResource;
  /** The version group in which the move is learned */
  version_group: NamedAPIResource;
  /** The minimum level to learn the move */
  level_learned_at: number;
}

/**
 * Base stat values for the given Pok??mon
 */
interface PokemonStat {
  /** The stat the Pok??mon has */
  stat: NamedAPIResource;
  /** The effort points (EV) the Pok??mon has in the stat */
  effort: number;
  /** The base value of the stat */
  base_stat: number;
}

/** Version Sprites */
interface VersionSprites {
  /** Generation-I Sprites of this Pok??mon */
  'generation-i': GenerationISprites;
  /** Generation-II Sprites of this Pok??mon */
  'generation-ii': GenerationIISprites;
  /** Generation-III Sprites of this Pok??mon */
  'generation-iii': GenerationIIISprites;
  /** Generation-IV Sprites of this Pok??mon */
  'generation-iv': GenerationIVSprites;
  /** Generation-V Sprites of this Pok??mon */
  'generation-v': GenerationVSprites;
  /** Generation-VI Sprites of this Pok??mon */
  'generation-vi': GenerationVISprites;
  /** Generation-VII Sprites of this Pok??mon */
  'generation-vii': GenerationVIISprites;
  /** Generation-VIII Sprites of this Pok??mon */
  'generation-viii': GenerationVIIISprites;
}

/**
 * A set of sprites used to depict this Pok??mon in the game.
 * A visual representation of the various sprites can be found at [PokeAPI/sprites](https://github.com/PokeAPI/sprites#sprites)
 */
interface PokemonSprites {
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pok??mon from the front in battle */
  front_shiny: string | null;
  /** The female depiction of this Pok??mon from the front in battle */
  front_female: string | null;
  /** The shiny female depiction of this Pok??mon from the front in battle */
  front_shiny_female: string | null;
  /** The default depiction of this Pok??mon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pok??mon from the back in battle */
  back_shiny: string | null;
  /** The female depiction of this Pok??mon from the back in battle */
  back_female: string | null;
  /** The shiny female depiction of this Pok??mon from the back in battle */
  back_shiny_female: string | null;
  /** Dream World, Official Artwork and Home sprites */
  other: OtherPokemonSprites;
  /** Version Sprites of this Pok??mon */
  versions: VersionSprites;
}

/** Other Pokemon Sprites (Dream World and Official Artwork sprites) */
interface OtherPokemonSprites {
  /** Dream World Sprites of this Pok??mon */
  dream_world: DreamWorld;
  /** Official Artwork Sprites of this Pok??mon */
  'official-artwork': OfficialArtwork;
  /** Home Artwork Sprites of this Pok??mon */
  home: Home;
}

/** Dream World sprites */
interface DreamWorld {
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The female depiction of this Pok??mon from the front in battle */
  front_female: string | null;
}

/** Official Artwork sprites */
interface OfficialArtwork {
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
}

/** Home sprites */
interface Home {
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The female depiction of this Pok??mon from the front in battle */
  front_female: string | null;
  /** The shiny depiction of this Pok??mon from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pok??mon from the back in battle */
  front_shiny_female: string | null;
}

/** Generation-I Srites */
interface GenerationISprites {
  /** Red-blue sprites of this Pok??mon */
  'red-blue': RedBlue;
  /** Yellow sprites of this Pok??mon  */
  yellow: Yellow;
}

/** Red/Blue Sprites */
interface RedBlue {
  /** The default depiction of this Pok??mon from the back in battle */
  back_default: string | null;
  /** The gray depiction of this Pok??mon from the back in battle */
  back_gray: string | null;
  /** The transparent depiction of this Pok??mon from the back in battle */
  back_transparent: string | null;
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The gray depiction of this Pok??mon from the front in battle */
  front_gray: string | null;
  /** The transparent depiction of this Pok??mon from the front in battle */
  front_transparent: string | null;
}

/** Yellow sprites */
interface Yellow {
  /** The default depiction of this Pok??mon from the back in battle */
  back_default: string | null;
  /** The gray depiction of this Pok??mon from the back in battle */
  back_gray: string | null;
  /** The transparent depiction of this Pok??mon from the back in battle */
  back_transparent: string | null;
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The gray depiction of this Pok??mon from the front in battle */
  front_gray: string | null;
  /** The transparent depiction of this Pok??mon from the front in battle */
  front_transparent: string | null;
}

/** Generation-II Sprites */
interface GenerationIISprites {
  /** Crystal sprites of this Pok??mon */
  crystal: Crystal;
  /** Gold sprites of this Pok??mon */
  gold: Gold;
  /** Silver sprites of this Pok??mon */
  silver: Silver;
}

/** Crystal sprites */
interface Crystal {
  /** The default depiction of this Pok??mon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pok??mon from the back in battle */
  back_shiny: string | null;
  /** The back shiny transparent depiction of this Pok??mon from the back in battle */
  back_shiny_transparent: string | null;
  /** The transparent depiction of this Pok??mon from the back in battle */
  back_transparent: string | null;
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pok??mon from the front in battle */
  front_shiny: string | null;
  /** The front shiny transparent depiction of this Pok??mon from the front in battle */
  front_shiny_transparent: string | null;
  /** The transparent depiction of this Pok??mon from the front in battle */
  front_transparent: string | null;
}

interface Gold {
  /** The default depiction of this Pok??mon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pok??mon from the back in battle */
  back_shiny: string | null;
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pok??mon from the front in battle */
  front_shiny: string | null;
  /** The transparent depiction of this Pok??mon from the front in battle */
  front_transparent: string | null;
}

/** Silver sprites */
interface Silver {
  /** The default depiction of this Pok??mon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pok??mon from the back in battle */
  back_shiny: string | null;
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pok??mon from the front in battle */
  front_shiny: string | null;
  /** The transparent depiction of this Pok??mon from the front in battle */
  front_transparent: string | null;
}

/** Generation-III Sprites */
interface GenerationIIISprites {
  /** Emerald sprites of this Pok??mon */
  emerald: Emerald;
  /** Firered-Leafgreen sprites of this Pok??mon */
  'firered-leafgreen': FireredLeafgreen;
  /** Ruby-Sapphire sprites of this Pok??mon */
  'ruby-sapphire': RubySapphire;
}

/** Emerald sprites */
interface Emerald {
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pok??mon from the front in battle */
  front_shiny: string | null;
}

/** FireRead LeafGreen sprites  */
interface FireredLeafgreen {
  /** The default depiction of this Pok??mon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pok??mon from the back in battle */
  back_shiny: string | null;
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pok??mon from the front in battle */
  front_shiny: string | null;
}

/** Ruby/Sapphire sprites */
interface RubySapphire {
  /** The default depiction of this Pok??mon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pok??mon from the back in battle */
  back_shiny: string | null;
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pok??mon from the front in battle */
  front_shiny: string | null;
}

/** Generation-IV Sprites */
interface GenerationIVSprites {
  /** Diamond-pearl Generation sprites of this Pok??mon */
  'diamond-pearl': DiamondPearl;
  /** Heartgold-Soulsilver sprites of this Pok??mon */
  'heartgold-soulsilver': HeartgoldSoulsilver;
  /** Platinum sprites of this Pok??mon */
  platinum: Platinum;
}

interface DiamondPearl {
  /** The default depiction of this Pok??mon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pok??mon from the back in battle */
  back_shiny: string | null;
  /** The female depiction of this Pok??mon from the back in battle */
  back_female: string | null;
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pok??mon from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pok??mon from the back in battle */
  back_shiny_female: string | null;
  /** The female depiction of this Pok??mon from the front in battle */
  front_female: string | null;
  /** The shiny female depiction of this Pok??mon from the back in battle */
  front_shiny_female: string | null;
}

interface HeartgoldSoulsilver {
  /** The default depiction of this Pok??mon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pok??mon from the back in battle */
  back_shiny: string | null;
  /** The female depiction of this Pok??mon from the back in battle */
  back_female: string | null;
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pok??mon from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pok??mon from the back in battle */
  back_shiny_female: string | null;
  /** The female depiction of this Pok??mon from the front in battle */
  front_female: string | null;
  /** The shiny female depiction of this Pok??mon from the back in battle */
  front_shiny_female: string | null;
}

interface Platinum {
  /** The default depiction of this Pok??mon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pok??mon from the back in battle */
  back_shiny: string | null;
  /** The female depiction of this Pok??mon from the back in battle */
  back_female: string | null;
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pok??mon from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pok??mon from the back in battle */
  back_shiny_female: string | null;
  /** The female depiction of this Pok??mon from the front in battle */
  front_female: string | null;
  /** The shiny female depiction of this Pok??mon from the back in battle */
  front_shiny_female: string | null;
}

/** Generation-V Sprites */
interface GenerationVSprites {
  /** Black-white sprites of this Pok??mon */
  'black-white': BlackWhite;
}

/** Black/White sprites */
interface BlackWhite {
  /** The animated sprite of this pok??mon */
  animated: Animated;
  /** The default depiction of this Pok??mon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pok??mon from the back in battle */
  back_shiny: string | null;
  /** The female depiction of this Pok??mon from the back in battle */
  back_female: string | null;
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pok??mon from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pok??mon from the back in battle */
  back_shiny_female: string | null;
  /** The female depiction of this Pok??mon from the front in battle */
  front_female: string | null;
  /** The shiny female depiction of this Pok??mon from the back in battle */
  front_shiny_female: string | null;
}
interface Animated {
  /** The default depiction of this Pok??mon from the back in battle */
  back_default: string | null;
  /** The shiny depiction of this Pok??mon from the back in battle */
  back_shiny: string | null;
  /** The female depiction of this Pok??mon from the back in battle */
  back_female: string | null;
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The shiny depiction of this Pok??mon from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pok??mon from the back in battle */
  back_shiny_female: string | null;
  /** The female depiction of this Pok??mon from the front in battle */
  front_female: string | null;
  /** The shiny female depiction of this Pok??mon from the back in battle */
  front_shiny_female: string | null;
}

/** Generation-VI Sprites */
interface GenerationVISprites {
  /** Omegaruby-Alphasapphire sprites of this Pok??mon */
  'omegaruby-alphasapphire': OmegarubyAlphasapphire;
  /** X-Y sprites of this Pok??mon */
  'x-y': XY;
}

/** Omega/Ruby Alpha/Sapphire sprites */
interface OmegarubyAlphasapphire {
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The female depiction of this Pok??mon from the front in battle */
  front_female: string | null;
  /** The shiny depiction of this Pok??mon from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pok??mon from the back in battle */
  front_shiny_female: string | null;
}

/** XY sprites */
interface XY {
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The female depiction of this Pok??mon from the front in battle */
  front_female: string | null;
  /** The shiny depiction of this Pok??mon from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pok??mon from the back in battle */
  front_shiny_female: string | null;
}

/** Generation-VII Sprites */
interface GenerationVIISprites {
  /** Icon sprites of this Pok??mon */
  icons: GenerationViiIcons;
  /** Ultra-sun-ultra-moon sprites of this Pok??mon */
  'ultra-sun-ultra-moon': UltraSunUltraMoon;
}

/** Generation VII icons */
interface GenerationViiIcons {
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The female depiction of this Pok??mon from the front in battle */
  front_female: string | null;
}

/** Ultra Sun Ultra Moon sprites */
interface UltraSunUltraMoon {
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The female depiction of this Pok??mon from the front in battle */
  front_female: string | null;
  /** The shiny depiction of this Pok??mon from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pok??mon from the back in battle */
  front_shiny_female: string | null;
}

/** Generation-VIII Sprites */
interface GenerationVIIISprites {
  /** Icon sprites of this Pok??mon */
  icons: GenerationViiiIcons;
}

/** Generation VIII icons */
interface GenerationViiiIcons {
  /** The default depiction of this Pok??mon from the front in battle */
  front_default: string | null;
  /** The female depiction of this Pok??mon from the front in battle */
  front_female: string | null;
}

/**
 * ## Location Area Encounter
 * Pok??mon location areas where Pok??mon can be found
 */
interface LocationAreaEncounter {
  /** The location area the referenced Pok??mon can be encountered in */
  location_area: NamedAPIResource;
  /** A list of versions and encounters with the referenced Pok??mon that might happen */
  version_details: VersionEncounterDetail[];
}

/**
 * ## Pokemon Colors
 * Colors used for sorting Pok??mon in a Pok??dex.
 * The color listed in the Pok??dex is usually the color most apparent or covering each Pok??mon's body.
 * No orange category exists; Pok??mon that are primarily orange are listed as red or brown.
 */
interface PokemonColor {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name:
    | 'black'
    | 'blue'
    | 'brown'
    | 'gray'
    | 'green'
    | 'pink'
    | 'purple'
    | 'red'
    | 'white'
    | 'yellow';
  /** The name of this resource listed in different languages */
  names: Name[];
  /** A list of the Pok??mon species that have this color */
  pokemon_species: NamedAPIResource[];
}

/**
 * ## Pokemon Form
 * Some Pok??mon may appear in one of multiple, visually different forms.
 * These differences are purely cosmetic. For variations within a Pok??mon species,
 * which do differ in more than just visuals, the 'Pok??mon' entity is used to represent such a variety.
 */
interface PokemonForm {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The order in which forms should be sorted within all forms.
   * Multiple forms may have equal order, in which case they should fall back on sorting by name
   */
  order: number;
  /** The order in which forms should be sorted within a species' forms */
  form_order: number;
  /** True for exactly one form used as the default for each Pok??mon */
  is_default: boolean;
  /** Whether or not this form can only happen during battle */
  is_battle_only: boolean;
  /** Whether or not this form requires mega evolution */
  is_mega: boolean;
  /** The name of this form */
  form_name: string;
  /** The Pok??mon that can take on this form */
  pokemon: NamedAPIResource;
  /** A set of sprites used to depict this Pok??mon form in the game */
  sprites: PokemonFormSprites;
  /** The version group this Pok??mon form was introduced in */
  version_group: NamedAPIResource;
  /** The form specific full name of this Pok??mon form, or empty if the form does not have a specific name */
  names: Name[];
  /** The form specific form name of this Pok??mon form, or empty if the form does not have a specific name */
  form_names: Name[];
  /** A list of details showing types this Pok??mon has */
  types: PokemonType[];
}

/**
 * Sprites used to depict this Pok??mon form in the game
 */
interface PokemonFormSprites {
  /** The default depiction of this Pok??mon form from the front in battle */
  front_default: string | null;
  /** The female depiction of this Pok??mon form from the front in battle */
  front_female: string | null;
  /** The shiny depiction of this Pok??mon form from the front in battle */
  front_shiny: string | null;
  /** The shiny female depiction of this Pok??mon form from the front in battle */
  front_shiny_female: string | null;
  /** The default depiction of this Pok??mon form from the back in battle */
  back_default: string | null;
  /** The female depiction of this Pok??mon form from the back in battle */
  back_female: string | null;
  /** The shiny depiction of this Pok??mon form from the back in battle */
  back_shiny: string | null;
  /** The shiny female depiction of this Pok??mon form from the back in battle */
  back_shiny_female: string | null;
}

/**
 * ## Pokemon Habitat
 * Habitats are generally different terrain Pok??mon can be found in
 * but can also be areas designated for rare or legendary Pok??mon
 */
interface PokemonHabitat {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name:
    | 'cave'
    | 'forest'
    | 'grassland'
    | 'mountain'
    | 'rare'
    | 'rough-terrain'
    | 'sea'
    | 'urban'
    | 'waters-edge';
  /** The name of this resource listed in different languages */
  names: Name[];
  /** A list of the Pok??mon species that can be found in this habitat */
  pokemon_species: NamedAPIResource[];
}

/**
 * ## Pokemon Shape
 * Shapes used for sorting Pok??mon in a Pok??dex
 */
interface PokemonShape {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The "scientific" name of this Pok??mon shape listed in different languages */
  awesome_names: AwesomeName[];
  /** The name of this resource listed in different languages */
  names: Name[];
  /** A list of the Pok??mon species that have this shape */
  pokemon_species: NamedAPIResource[];
}

/**
 * The "scientific" name of the Pok??mon shape listed in different languages
 */
interface AwesomeName {
  /** The localized "scientific" name for an API resource in a specific language */
  awesome_name: string;
  /** The language this "scientific" name is in */
  language: NamedAPIResource;
}

/**
 * ## Pokemon Species
 * A Pok??mon Species forms the basis for at least one Pok??mon.
 * Attributes of a Pok??mon species are shared across all varieties of Pok??mon within the species.
 * A good example is Wormadam; Wormadam is the species which can be found in three different varieties,
 * Wormadam-Trash, Wormadam-Sandy and Wormadam-Plant */
interface PokemonSpecies {
  /** The identifier for this resource */
  id: number;
  /** The name for this resource */
  name: string;
  /** The order in which species should be sorted. Based on National Dex order, except families are grouped together and sorted by stage */
  order: number;
  /** The chance of this Pok??mon being female, in eighths; or -1 for genderless */
  gender_rate: number;
  /** The base capture rate; up to 255. The higher the number, the easier the catch */
  capture_rate: number;
  /** The happiness when caught by a normal Pok??ball; up to 255. The higher the number, the happier the Pok??mon */
  base_happiness: number;
  /** Whether or not this is a baby Pok??mon */
  is_baby: boolean;
  /** Whether or not this is a legendary Pok??mon */
  is_legendary: boolean;
  /** Whether or not this is a mythical Pok??mon */
  is_mythical: boolean;
  /** Initial hatch counter: one must walk 255 ?? (hatch_counter + 1) steps before this Pok??mon's egg hatches, unless utilizing bonuses like Flame Body's */
  hatch_counter: number;
  /** Whether or not this Pok??mon has visual gender differences */
  has_gender_differences: boolean;
  /** Whether or not this Pok??mon has multiple forms and can switch between them */
  forms_switchable: boolean;
  /** The rate at which this Pok??mon species gains levels */
  growth_rate: NamedAPIResource;
  /** A list of Pokedexes and the indexes reserved within them for this Pok??mon species */
  pokedex_numbers: PokemonSpeciesDexEntry[];
  /** A list of egg groups this Pok??mon species is a member of */
  egg_groups: NamedAPIResource[];
  /** The color of this Pok??mon for Pok??dex search */
  color: NamedAPIResource;
  /** The shape of this Pok??mon for Pok??dex search */
  shape: NamedAPIResource;
  /** The Pok??mon species that evolves into this Pokemon_species */
  evolves_from_species: NamedAPIResource;
  /** The evolution chain this Pok??mon species is a member of */
  evolution_chain: APIResource;
  /** The habitat this Pok??mon species can be encountered in */
  habitat: NamedAPIResource;
  /** The generation this Pok??mon species was introduced in */
  generation: NamedAPIResource;
  /** The name of this resource listed in different languages */
  names: Name[];
  /** A list of encounters that can be had with this Pok??mon species in pal park */
  pal_park_encounters: PalParkEncounterArea[];
  /** A list of flavor text entries for this Pok??mon species */
  flavor_text_entries: FlavorText[];
  /** Descriptions of different forms Pok??mon take on within the Pok??mon species */
  form_descriptions: Description[];
  /** The genus of this Pok??mon species listed in multiple languages */
  genera: Genus[];
  /** A list of the Pok??mon that exist within this Pok??mon species */
  varieties: PokemonSpeciesVariety[];
}

/**
 * The genus of the given Pok??mon species listed in multiple languages
 */
interface Genus {
  /** The localized genus for the referenced Pok??mon species */
  genus: string;
  /** The language this genus is in */
  language: NamedAPIResource;
}

/** Pokedexes and the indexes reserved within them for the given Pok??mon species */
interface PokemonSpeciesDexEntry {
  /** The index number within the Pok??dex */
  entry_number: number;
  /** The Pok??dex the referenced Pok??mon species can be found in */
  pokedex: NamedAPIResource;
}

/**
 * Encounter that can be had with the given Pok??mon species in pal park
 */
interface PalParkEncounterArea {
  /** The base score given to the player when the referenced Pok??mon is caught during a pal park run */
  base_score: number;
  /** The base rate for encountering the referenced Pok??mon in this pal park area */
  rate: number;
  /** The pal park area where this encounter happens */
  area: NamedAPIResource;
}

/**
 * Pok??mons that exist within this Pok??mon species
 */
interface PokemonSpeciesVariety {
  /** Whether this variety is the default variety */
  is_default: boolean;
  /** The Pok??mon variety */
  pokemon: NamedAPIResource;
}

/**
 * Evolution Detail
 * All details regarding the specific details of the referenced Pok??mon species evolution.
 */
interface EvolutionDetail {
  /** The item required to cause evolution this into Pok??mon species. */
  item: NamedAPIResource | null;
  /** The type of event that triggers evolution into this Pok??mon species. */
  trigger: NamedAPIResource;
  /** The id of the gender of the evolving Pok??mon species must be in order to evolve into this Pok??mon species. */
  gender: number | null;
  /** The item the evolving Pok??mon species must be holding during the evolution trigger event to evolve into this Pok??mon species. */
  held_item: NamedAPIResource | null;
  /** The move that must be known by the evolving Pok??mon species during the evolution trigger event in order to evolve into this Pok??mon species. */
  known_move: NamedAPIResource | null;
  /** The evolving Pok??mon species must know a move with this type during the evolution trigger event in order to evolve into this Pok??mon species. */
  known_move_type: NamedAPIResource | null;
  /** The location the evolution must be triggered at. */
  location: NamedAPIResource | null;
  /** The minimum required level of the evolving Pok??mon species to evolve into this Pok??mon species. */
  min_level: number | null;
  /** The minimum required level of happiness the evolving Pok??mon species to evolve into this Pok??mon species. */
  min_happiness: number | null;
  /** The minimum required level of beauty the evolving Pok??mon species to evolve into this Pok??mon species. */
  min_beauty: number | null;
  /** The minimum required level of affection the evolving Pok??mon species to evolve into this Pok??mon species. */
  min_affection: number | null;
  /** Whether or not it must be raining in the overworld to cause evolution this Pok??mon species. */
  needs_overworld_rain: boolean;
  /** The Pok??mon species that must be in the players party in order for the evolving Pok??mon species to evolve into this Pok??mon species. */
  party_species: NamedAPIResource | null;
  /**
   * The player must have a Pok??mon of this type in their party during the evolution trigger event
   * in order for the evolving Pok??mon species to evolve into this Pok??mon species.
   */
  party_type: NamedAPIResource | null;
  /** The required relation between the Pok??mon's Attack and Defense stats. 1 means Attack > Defense. 0 means Attack = Defense. -1 means Attack < Defense. */
  relative_physical_stats: 1 | 0 | -1 | null;
  /** The required time of day. Day or night. */
  time_of_day: 'Day' | 'Night' | '';
  /** Pok??mon species for which this one must be traded. */
  trade_species: NamedAPIResource | null;
  /** Whether or not the 3DS needs to be turned upside-down as this Pok??mon levels up. */
  turn_upside_down: boolean;
}

/**
 * ## Chain Link
 * Contains evolution details for a Pok??mon in the chain.
 * Each link references the next Pok??mon in the natural evolution order
 */
interface ChainLink {
  /** Whether or not this link is for a baby Pok??mon. This would only ever be true on the base link */
  is_baby: boolean;
  /** The Pok??mon species at this point in the evolution chain */
  species: NamedAPIResource;
  /** All details regarding the specific details of the referenced Pok??mon species evolution */
  evolution_details: EvolutionDetail[];
  /** A List of chain objects */
  evolves_to: ChainLink[];
}

/**
 * ## Evolution Chain
 * Evolution chains are essentially family trees.
 * They start with the lowest stage within a family and detail
 * evolution conditions for each as well as Pok??mon they can evolve
 * into up through the hierarchy.
 */
interface EvolutionChain {
  /** The identifier for this resource */
  id: number;
  /**
   * The item that a Pok??mon would be holding when mating that would trigger
   * the egg hatching a baby Pok??mon rather than a basic Pok??mon
   */
  baby_trigger_item: NamedAPIResource | null;
  /**
   * The base chain link object. Each link contains evolution details for a Pok??mon in the chain.
   * Each link references the next Pok??mon in the natural evolution order
   */
  chain: ChainLink;
}

/**
 * ## Evolution Trigger
 * Evolution triggers are the events and conditions that cause a Pok??mon to evolve.
 * There are numerous methods of evolution which define how and when Pok??mon evolve.
 * Most Pok??mon will evolve by leveling up while others evolve through specific means,
 * such as being traded, achieving a certain amount of friendship or leveling at certain times, among others.
 * - Check out [Bulbapedia](https://bulbapedia.bulbagarden.net/wiki/Methods_of_evolution) for greater detail.
 */
interface EvolutionTrigger {
  /** The identifier for this resource. */
  id: number;
  /** The name for this resource. */
  name: 'level-up' | 'trade' | 'use-item' | 'shed' | 'other';
  /** The name of this resource listed in different languages. */
  names: Name[];
  /** A list of pokemon species that result from this evolution trigger. */
  pokemon_species: NamedAPIResource[];
}
