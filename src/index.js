import { Draggable } from "@shopify/draggable";

window.Livewire?.directive('draggable', function ({el, directive, component}) {
    const zones = el.querySelectorAll('[wire\\:draggable\\.zone]');
    let options = { draggable: '[wire\\:draggable\\.item]' };
    const draggable = new Draggable(zones, options);

    let overContainer;
    draggable.on('drag:over:container', function (event) {
        overContainer = event.overContainer;
        draggable.on('drag:stop', function (eventStop) {
            if (overContainer == eventStop.sourceContainer)
                return;

            component.$wire.call(
                directive.method,
                eventStop.originalSource.getAttribute('wire:draggable.item'),
                overContainer.getAttribute('wire:draggable.zone')
            );
        });
    });
});
