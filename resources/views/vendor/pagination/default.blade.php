@if ($paginator->hasPages())

    <nav role="navigation" aria-label="{{ __('Pagination Navigation') }}"
         class="border-t mt-3 border-background-700 px-4 flex items-center justify-between sm:px-0">

        <div class="-mt-px w-0 flex-1 flex">
            @if (!$paginator->onFirstPage())
                <a href="{{ $paginator->previousPageUrl() }}"
                   class="pt-4 tracking-wider pr-1 inline-flex items-center text-sm font-medium text-font-secondary hover:text-font-hover">

                <!-- Heroicon name: solid/arrow-narrow-left -->
                    <svg class="mr-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                         fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                              clip-rule="evenodd"/>
                    </svg>
                    Previous
                </a>
            @endif
        </div>
        <div class="hidden md:-mt-px md:flex">
            @if($paginator->currentPage() - 4 > 1 )
                <span
                    class="border-transparent text-font-secondary border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                ...
            </span>
            @endif

            @foreach ($paginator->getUrlRange($paginator->currentPage() - 4 < 1 ? 1 : $paginator->currentPage() - 4, $paginator->currentPage() + 4 > $paginator->lastPage() ? $paginator->lastPage() : $paginator->currentPage() + 4) as $label => $url)
                @if($paginator->currentPage() != $label)
                    <a href="{{$url}}"
                       class="border-transparent text-font-secondary hover:text-font-hover hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                        {{$label}}
                    </a>
                @else
                    <a href="{{$url}}"
                       class="border-primary-500 text-primary-600 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium"
                       aria-current="page">
                        {{$label}}
                    </a>
                @endif
            @endforeach

            @if($paginator->currentPage() + 4 < $paginator->lastPage())
                <span
                    class="border-transparent text-font-secondary border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium">
                ...
                </span>
            @endif

        </div>

        <div class="-mt-px w-0 flex-1 flex justify-end">
            @if ($paginator->hasMorePages())
                <a href="{{ $paginator->nextPageUrl() }}"
                   class="pt-4 tracking-wider pr-1 inline-flex items-center text-sm font-medium text-font-secondary hover:text-font-hover">
                    Next
                    <!-- Heroicon name: solid/arrow-narrow-right -->
                    <svg class="ml-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                         fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"/>
                    </svg>
                </a>
            @endif
        </div>
    </nav>

@endif
